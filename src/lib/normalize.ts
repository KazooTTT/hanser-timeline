const getTimeLineItem = (item: any) => {
  return {
    key: item.id,
    cover: item?.cover?.external?.url ?? item?.cover?.file?.url,
    title: item.properties.Name.title[0].plain_text,
    content: item.properties.content.rich_text?.[0]?.plain_text,
    url: item.properties.url.url,
    tags: item.properties.Tags.multi_select,
    date: item.properties.Date.date?.start,
  };
};

export { getTimeLineItem };
