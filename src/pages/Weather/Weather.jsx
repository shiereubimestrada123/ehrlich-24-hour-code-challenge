import { Link } from "react-router-dom";
import moment from 'moment';

import Main from '../../components/Main'

function Weather({ data }) {
	const tableHeader = ['Date (mm/dd/yyyy)', 'Temp(F)', 'Description', 'Main', 'Pressure', 'Humidity']

  return (
    <section>
      <Main>
				<table className="table-auto border-collapse border border-slate-400">
					<thead>
						<tr>
							{tableHeader.map((h, i) => (
								<th key={i} className='border border-slate-300'>{h}</th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-slate-300">{moment().format('MM/DD/YYYY')}</td>
							<td className="border border-slate-300">{data?.main?.temp}</td>
							<td className="border border-slate-300">{data.weather ? data?.weather[0]?.description : null}</td>
							<td className="border border-slate-300">{data.weather ? data?.weather[0]?.main : null}</td>
							<td className="border border-slate-300">{data?.main?.pressure}</td>
							<td className="border border-slate-300">{data?.main?.humidity}</td>
						</tr>
					</tbody>
				</table>
				<Link to='/home' className="w-fit bg-slate-400 self-end py-2 px-4">Back</Link>
			</Main>
    </section>
  )
}

export default Weather