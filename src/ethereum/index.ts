import {ethers} from 'ethers'

export class ETH {
    windowProvider: any
    win: any = window
    windowEthereum: any
    provider: any
    signer: any
    network: string = ""
    async init(setState: setStateFunc) {
        
        if(this.win.ethereum){
            this.windowEthereum = this.win.ethereum
            if(this.win.ethereum._metamask ){
                const isUnlocked = await this.windowEthereum.isConnected()
                console.log({isUnlocked})
                isUnlocked && await this.connect(setState)
                return isUnlocked
            }
            
        }
    }

    async connect(setState: setStateFunc) {
        if(!this.windowEthereum){
            alert("No web3 provider found!")
        }
        await this.windowEthereum.enable()
        const provider =  new ethers.providers.Web3Provider(this.windowEthereum)
        this.provider = provider
        
        const s = provider.getSigner()
        this.signer = s
        
        const address = await s.getAddress()
        const balance = String(await s.getBalance())
        const network = provider.network.name
        this.network = network
        const transactions = await (new ethers.providers.EtherscanProvider(network, "EF34VB42T97SX85ESKZIBP3KWTQQW5FKSB")).getHistory(address)
        console.log({transactions, network})
        setState({
            address,
            balance,
            transactions: transactions
        })

    }

    async sendEther(to: string, etherValue: string){
        const tx = await this.signer.sendTransaction({
            to: to,
            value: ethers.utils.parseEther(etherValue)
        })
        return tx.hash
    }
}

const eth = new ETH()
export default eth
