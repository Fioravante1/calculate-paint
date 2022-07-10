import styles from './styles/Instruction.module.scss'

function Intruction() {
  return (
    <>
      <div className={styles.container__title__subtitle}>
        <h1>CALCULADORA DE TINTA</h1>
        <h2>Preencha os campos e clique no botão calcular</h2>
      </div>

      <div className={styles.container__title__instruction}>
        <h1>Instrução de uso:</h1>
      </div>

      <div className={styles.container__instruction}>
        <ol>
          <li>
            Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50
            metros quadrados.
          </li>
          <li>
            O total de área das portas e janelas deve ser no máximo 50% da área
            de parede.
          </li>
          <li>
            Caso sua parede tenha porta, sua parede deve ter no minimo 2.20m de
            altura.
          </li>
          <li>
            O botão para cálculo só será desabilitado caso todos os campos sejam
            preenchidos.
          </li>
          <li>
            O botão ficará desabilitado se as condições não sejam atentidas.
          </li>
        </ol>
      </div>
    </>
  )
}

export default Intruction
