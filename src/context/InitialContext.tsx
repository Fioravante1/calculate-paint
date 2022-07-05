export type TypeInitialState = {
  name: string
  setName: (newState: string) => void
}

export const initialContext: TypeInitialState = {
  name: 'Fioravante',
  setName: () => {}
}
