import moment from 'moment';

export const FORMAT_DATE = 'MMM Do, YYYY';
export const SERIALIZE_DATE = 'YYYYMMDD';
export const MONTH_FORMAT = 'MMMM, YYYY';
export const DAY_MONTH_FORMAT = 'MMM Do.';
export const DAY_MONTH_TIME_FORMAT = 'MMM Do. hh:mm:ss';

export const formatDate = (date: moment.MomentInput): string =>
  moment(date).format(FORMAT_DATE);
export const serializeDate = (date: moment.MomentInput): string =>
  moment(date).format(SERIALIZE_DATE);
export const formatMonth = (date: moment.MomentInput): string =>
  moment(date).format(MONTH_FORMAT);
export const formatDayMonth = (date: moment.MomentInput): string =>
  moment(date).format(DAY_MONTH_FORMAT);
export const formatDayMonthTime = (date: moment.MomentInput): string =>
  moment(date).format(DAY_MONTH_TIME_FORMAT);
