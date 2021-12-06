export interface IPaginationProps {
  itemsCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}
