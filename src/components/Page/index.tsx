import { TransrateObj } from '../../servises/Hotpepper/Transrate';
import { Shops, MapData } from '../../constants/Types/Hotpepper';
import Link from 'next/link'

const mapData: MapData = {
  lat: 34.703261,
  lng: 135.495693,
  range: 1
}

export const Body = () => {

    const data: Shops = TransrateObj(mapData);

  console.log(data);

  return (
    <div>
      <p>AAA</p>
      <ul>
        {Object.keys(data).map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.urls.pc}>
                  <a>
                    <div >
                      <div >
                        <div>
                          <img src={item.photo.mobile.s} alt={item.name} />
                        </div>
                      </div>
                      <div>
                        <div> {item.name}</div>
                        <div>
                          <div>
                            <span>
                              {item.genre.name}
                            </span>
                            <span>{item.catch}</span>
                          </div>
                          <p> {item.access}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
