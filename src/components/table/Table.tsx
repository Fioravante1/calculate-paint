import ContextFormCalculate from 'context/Context'
import { useContext } from 'react'

function Table() {
  const { totalLiters } = useContext(ContextFormCalculate)
  return (
    <div>
      <h2>{`Área total de parede: ${totalLiters.totalArea}m2`}</h2>
      <table>
        <thead>
          <tr>
            <th>Lata de 0.5ml</th>
            <th>Lata de 2.5L</th>
            <th>Lata de 3.6L</th>
            <th>Lata de 18L</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{totalLiters.canPaint05.count}</td>
            <td>{totalLiters.canPaint25.count}</td>
            <td>{totalLiters.canPaint36.count}</td>
            <td>{totalLiters.canPaint180.count}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
