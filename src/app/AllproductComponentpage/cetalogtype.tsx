interface cetagolydetail {
  category_ids: number,
  type: string,
  parent: number[]
  isselect: boolean
}
interface dealdetail {
  deal_ids: number,
  type: string,
  isselect: boolean
}

interface cetagolyProps {
  cetagory: cetagolydetail[];
  deal: dealdetail[];
}

const cetalogtype: React.FC<cetagolyProps> = ({ cetagory, deal }) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col hidden lg:flex border-solid border-2 rounded-lg">
        <div className="">
          <button className="flex flex-row justify-between">
            <p className="">หมวดหมู่สินค้า</p>
          //img
          </button>
          <hr className="w-full mx-1 my-1" />
        </div>
        <div className="flex flex-col">
          {cetagory?.map((item, index) => (
            <div key={item.category_ids} className="">
              {item.parent.includes(0) ? (
                <button>
                  {item.type}
                </button>
              ) : (
                <div className="mx-3">
                  <button>
                    {item.type}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default cetalogtype