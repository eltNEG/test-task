const Row = ({centerItems=false, children, className=""}: IRowProps) => {
    return (
      <div className={`w-full ${centerItems && 'flex flex-wrap justify-center'} ${className}`}>
        {children}
      </div>
    )
  }

export default Row