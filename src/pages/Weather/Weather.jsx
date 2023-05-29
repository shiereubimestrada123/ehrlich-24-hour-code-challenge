import Main from '../../components/Main'

function Weather({ data }) {
	console.log('test')
	console.log('weather', data)
  return (
    <section>
      <Main>
			<table class="table-auto border-collapse border border-slate-400">
				<thead>
					<tr>
						<th class="border border-slate-300">Date (mm/dd/yyyy)</th>
						<th class="border border-slate-300">Temp(F)</th>
						<th class="border border-slate-300">Description</th>
						<th class="border border-slate-300">Main</th>
						<th class="border border-slate-300">Pressure</th>
						<th class="border border-slate-300">Humidity</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="border border-slate-300">09/01/2020</td>
						<td class="border border-slate-300">75</td>
						<td class="border border-slate-300">Sky is clear</td>
						<td class="border border-slate-300">Clear</td>
						<td class="border border-slate-300">1023.68</td>
						<td class="border border-slate-300">Humidity</td>
					</tr>
				</tbody>
			</table>
			</Main>
    </section>
  )
}

export default Weather