import { Link } from "react-router-dom";

function CountriesList({countries}) {

    return(
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
          <div className="col-5">
            <div className="list-group">
                {countries.map((country) => {
                    let flagCode = country.alpha2Code.toLowerCase();
                    let imgURL = "https://flagpedia.net/data/flags/icon/72x54/" + flagCode + ".png"
                    return (
                        <div>
                    
                    <Link to={`/${country.alpha3Code}`} key={country.alpha3Code} className = "list-group-item list-group-item-action">
                    <img src={imgURL} alt ={`${country.name.common}`} style={{width:"30px", height:"20px", marginRight: "10px"}}/>
                    {country.name.common}
                    </Link>
                    </div>)
                })
                    
                }
              
              </div>
            </div>
            </div>

    )
}

export default CountriesList
