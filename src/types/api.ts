export type ApiNbaTeamsResponse = {
  data: Team[];
  meta: Meta;
};

export type Team = {
  id: number;
  abbreviation: string;
  city: string;
  conference: Conference;
  division: string;
  full_name: string;
  name: string;
};

export enum Conference {
  East = 'East',
  West = 'West',
}

export type Meta = {
  total_pages: number;
  current_page: number;
  next_page: number;
  per_page: number;
  total_count: number;
};
