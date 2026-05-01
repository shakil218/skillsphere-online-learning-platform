const DetailsPage = async({params}) => {
  const {id} = await params;
  return (
    <div className='min-h-[calc(100vh-301.4px)] text-center'>
      Details page!!! {id} no card
    </div>
  );
};

export default DetailsPage;