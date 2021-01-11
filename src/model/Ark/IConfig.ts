export default interface IConfig {
    included: boolean
    deploy: (...args: any[]) => string
}
