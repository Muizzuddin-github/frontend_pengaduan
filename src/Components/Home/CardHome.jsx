const CardHome = ({ image, title, desc }) => {
  return (
    <div className="border-2 border-dark-blue rounded-lg p-4">
      <img src={image} className="rounded-lg" alt="" />
      <div className="mt-3">
        <h1 className="text-2xl font-bold">Dari : {title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CardHome;
