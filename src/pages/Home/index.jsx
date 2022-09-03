
import './styles.css';

import { Card } from '../../components/Card';


export function Home() {

  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Wallison" time="10:10:21" />
      <Card name="Leticia" time="10:10:20" />
      </div>
  )
}


