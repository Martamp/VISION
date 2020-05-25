const ENDPOINT = 'https://www.collectionapi.metmuseum.org/public/collection/v1/objectshttps://collectionapi.metmuseum.org/public/collection/v1/objects';

const fetchData = () => fetch(ENDPOINT).then((response) => response.json());

export default fetchData;
