export const formatAddress = (
  address?: string,
  city?: string,
  state?: string,
  country?: string,
  postalCode?: string,
): string =>
  `${address ?? ''}${city ? ', ' + city : ''}${postalCode ? ', ' + postalCode : ''}${state ? ', ' + state : ''}${
    country ? ', ' + country : ''
  }`;
