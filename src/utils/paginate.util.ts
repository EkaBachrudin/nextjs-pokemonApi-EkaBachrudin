export const paginate = (items: any, pageNumber: any, limit: any) => {
      const startIndex = (pageNumber - 1) * limit;
      return items.slice(startIndex, startIndex + limit);
};