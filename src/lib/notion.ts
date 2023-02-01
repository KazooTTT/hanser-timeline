import { Client } from '@notionhq/client';
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

const auth = process.env.NOTION_API_KEY;

const defaultSorts = [
  {
    property: 'last_edited_time',
    direction: 'descending' as const,
  },
];

export const fetchDatabaseById = async (
  databaseId: string,
  sorts?: QueryDatabaseParameters['sorts']
) => {
  const notion = new Client({ auth: auth });

  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: sorts ?? defaultSorts,
  });

  return response.results;
};
