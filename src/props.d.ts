declare namespace Enums {
    import {TransactionType} from './enums'
    import {ScreensType} from './enums'
}

interface ICartHeaderProps {
    children: React.ReactNode,
    className?: string
}

interface IBalanceProps {
    setScreen: setScreenFunc
}

interface IRowProps {
    centerItems?: boolean
    children: React.ReactNode
    className?: string
}

interface ITransactionProps {
    txType: TransactionType
    txTime: string
    txETHValue: string
    txUSDValue: string
}

interface ISecondaryText {
    text: string
    className?: string
}

interface IScreen {
    setScreen: setScreenFunc
}

interface IScreens extends IScreen {
    screen: ScreensType
}

type setScreenFunc = (screen: ScreensType) => void

interface ITxFormField {
    label: string
    placeholder: string
    value: string
    onChange: any
    className?: string
}

interface ITxForm {
    setScreen: setScreenFunc
}

interface IAppState {
    transactions: Array<Transaction>;
    address: string;
    balance: string;
}

type setStateFunc = (state: IAppState) => void
