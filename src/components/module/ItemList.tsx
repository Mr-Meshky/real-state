function ItemList({ data }: { data: string[] | undefined }) {
  return (
    <div>
      {data?.length ? (
        <ul className="mr-5 mb-12">
          {data.map((amenity: string, index: number) => (
            <li key={index} className="marker:text-primary">
              {amenity}
            </li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
}

export default ItemList;
