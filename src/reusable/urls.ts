const BASE_URL = 'http://localhost:4000';
export const API_URL = (slug: string) => `${BASE_URL}/${slug}`

export const GET_USER = (id: string) => `user/${id}`;

export const GET_PLANET = (id: string | undefined) => `planets/${id}`;