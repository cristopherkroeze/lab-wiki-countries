import { useParams, Link } from "react-router-dom"

function CountryDetails({countries}) {
    

    const {alpha3Code} = useParams();

    const foundCountry = countries.find((oneCountry) => {
        return oneCountry.alpha3Code === alpha3Code;
    })
    

    return(<div className="col-7">
    <h1>{foundCountry.name.common}</h1>
    <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
        alt={`${foundCountry.name} flag`}
        style={{ width: '200px', height: '150px', marginBottom: '20px' }}
      />
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td>Capital</td>
          <td>{foundCountry.capital[0]}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>
            {foundCountry.area} km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
                {foundCountry.borders && foundCountry.borders.map((country) => {
                    return <li key = {country}><Link to={`/${country}`}>{country}</Link></li>
                })}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>)

}

export default CountryDetails