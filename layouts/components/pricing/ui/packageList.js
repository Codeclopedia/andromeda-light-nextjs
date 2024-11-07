const PackageList = ({ title, packages }) => {
    return (
      <div>
        <h1>{title} Packages</h1>
        {packages.map((pkg, index) => (
          <div key={index} className="package">
            <h3>{pkg.name}</h3>
            <p><strong>Price:</strong> {pkg.price}</p>
            <p>{pkg.description}</p>
            <ul>
              {pkg.services && pkg.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default PackageList;
  