import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { fetchDatabaseById } from '@/lib/notion';
import { getTimeLineItem } from '@/lib/normalize';

export default function Timeline({ list }: { list: PageObjectResponse[] }) {
  return (
    <ul>
      {list?.map((item: { id: any }) => (
        <li key={item.id}>{getTimeLineItem(item).title}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const databaseId = process.env.DATABASE_ID;
  const sorts = [
    {
      property: 'Date',
      direction: 'descending' as const,
    },
  ];
  const list = databaseId ? await fetchDatabaseById(databaseId, sorts) : [];

  return {
    props: {
      list,
    },
  };
}
