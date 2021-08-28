export const getDocumentPath = (documentName: string | undefined): string =>
  `${process.env.REACT_APP_RESOURCE_URL}/${documentName}`;
