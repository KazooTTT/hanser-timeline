import { useRef, useState } from "react"
import Image from "next/image"
import { set } from "date-fns"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Toggle } from "./ui/toggle"

const invoices = [
  {
    datetime: "2022-08-01T08:11:32.311Z",
    cover: "https://source.unsplash.com/128x128/?fitness",
    title: "Dolor Sit Amet",
    tags: ["technology", "science", "AI", "data", "programming"],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    datetime: "2022-03-03T15:54:18.244Z",
    cover: "https://source.unsplash.com/128x128/?nature",
    title: "Dolor Sit Amet",
    tags: ["science"],
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
  },
  {
    datetime: "2022-08-22T07:49:28.234Z",
    cover: "https://source.unsplash.com/128x128/?cats",
    title: "Dolor Sit Amet",
    tags: ["technology"],
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    datetime: "2023-08-29T23:06:54.130Z",
    cover: "https://source.unsplash.com/128x128/?cars",
    title: "Consectetur Adipiscing Elit",
    tags: ["technology", "science", "data", "AI", "programming"],
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
  },
  {
    datetime: "2023-05-22T12:43:33.375Z",
    cover: "https://source.unsplash.com/128x128/?art",
    title: "Consectetur Adipiscing Elit",
    tags: ["programming", "science", "data"],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    datetime: "2022-08-22T22:53:26.834Z",
    cover: "https://source.unsplash.com/128x128/?beach",
    title: "Consectetur Adipiscing Elit",
    tags: ["programming", "data"],
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    datetime: "2022-10-04T11:55:39.515Z",
    cover: "https://source.unsplash.com/128x128/?animals",
    title: "Lorem Ipsum",
    tags: ["data", "programming", "AI", "science"],
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
  },
  {
    datetime: "2022-11-22T16:17:40.021Z",
    cover: "https://source.unsplash.com/128x128/?cars",
    title: "Dolor Sit Amet",
    tags: ["science", "technology", "programming", "data"],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    datetime: "2022-08-18T22:55:13.364Z",
    cover: "https://source.unsplash.com/128x128/?mountains",
    title: "Lorem Ipsum",
    tags: ["technology"],
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
  },
  {
    datetime: "2023-01-25T03:09:13.480Z",
    cover: "https://source.unsplash.com/128x128/?cats",
    title: "Consectetur Adipiscing Elit",
    tags: ["data", "science", "AI", "technology", "programming"],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

// format datetime to date yyyy-mm-dd
const formatDate = (datetime: string) => {
  const date = new Date(datetime)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${month}-${day}`
}

export default function TableDemo() {
  const [activeTag, setActiveTag] = useState<string | undefined>()

  const calcTagsCount = invoices.reduce(
    (acc: { [key: string]: number }, invoice) => {
      invoice.tags.forEach((tag) => {
        if (acc[tag]) {
          acc[tag] += 1
        } else {
          acc[tag] = 1
        }
      })
      return acc
    },
    {}
  )

  const filteredInvoices = activeTag
    ? invoices.filter((invoice) => invoice.tags.includes(activeTag))
    : invoices

  return (
    <>
      <div className="flex space-x-4">
        {Object.entries(calcTagsCount).map(([tag, count]) => {
          return (
            <Toggle
              key={tag}
              className="flex items-center space-x-1"
              onPressedChange={() => {
                tag === activeTag ? setActiveTag(undefined) : setActiveTag(tag)
              }}
              pressed={activeTag === tag}
            >
              <Badge variant="outline">{tag}</Badge>
              <span className="text-xs font-bold">({count})</span>
            </Toggle>
          )
        })}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-36 text-center">日期</TableHead>
            <TableHead className="w-24 text-center">缩略图</TableHead>
            <TableHead className="text-center">标题</TableHead>
            <TableHead className="text-center">标签</TableHead>
            <TableHead className="text-center">内容</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvoices.map((invoice) => (
            <TableRow key={invoice.datetime}>
              <TableCell className="text-center">
                {formatDate(invoice.datetime)}
              </TableCell>
              <TableCell className="text-center">
                <Image
                  src={invoice.cover}
                  alt={"cover"}
                  className="rounded-md"
                  width={64}
                  height={64}
                ></Image>
              </TableCell>
              <TableCell className="text-center">{invoice.title}</TableCell>
              <TableCell>
                <div className="space-x-1 space-y-1">
                  {invoice.tags.map((item) => (
                    <Badge variant="outline" key={item}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>{invoice.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
