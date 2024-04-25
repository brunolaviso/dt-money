import logo from './assets/logo.png'
import './global.css'
import './header.css'
import './summary.css'
import './table.css'

export function App() {
  return (
    <>
      <header>
        <div className='container header-content'>
          <img src={logo} alt="" />
          <button className='header-content-button'>Nova transação</button>
        </div>
      </header>
      <div className='summary'>
        <div className='container summary-content'>
          <div className='card'>
            <span>Entradas</span>
            <strong>R$ 17.400,00</strong>
          </div>
          <div className='card'>
            <span>Saídas</span>
            <strong>R$ 1.259,00</strong>
          </div>
          <div className='card'>
            <span>Total</span>
            <strong>R$ 16.141,00</strong>
          </div>
        </div>
        <div className='table'>
          <div className='container table-content'>
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Preço</th>
                  <th>Categoria</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Desenvolvimento de website</td>
                  <td className='deposit'>R$ 12.000,00</td>
                  <td>Desenvolvimento</td>
                  <td>20/02/2021</td>
                </tr>
                <tr>
                  <td>Aluguel</td>
                  <td className='withdraw'>- R$ 1.259,00</td>
                  <td>Casa</td>
                  <td>17/02/2021</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  )
}
