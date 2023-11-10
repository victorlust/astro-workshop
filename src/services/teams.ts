import { type ApiNbaTeamsResponse, type Team } from '../types/api';

export async function getTeams() {
  const res = await fetch('https://www.balldontlie.io/api/v1/teams');
  const { data } = (await res.json()) as ApiNbaTeamsResponse;
  return data;
}

export async function getTeamById(id: number) {
  const res = await fetch(`https://www.balldontlie.io/api/v1/teams/${id}`);
  const data = (await res.json()) as Team;
  return data;
}
