export default function Delivery({ listTask = [] }) {
  // 
  return (
    <>
      <div className="delivery-root">
        {listTask.map((task, index) => (
          <div key={index} className="delivery-task">
            Prueba
          </div>
        ))}
      </div>
      <style jsx>{`
        .delivery-root {
          padding-bottom: 20px;
        }
        .delivery-task {
          height: 50px;
          border: 1px solid yellow;
          border-radius: 10px;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
