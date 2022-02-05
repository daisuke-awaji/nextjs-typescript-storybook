export interface Props {
  name: string;
  percent: number | undefined;
}
export const ProgressBar = ({ name, percent }: Props): JSX.Element => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <div>
          <span className="inline-block text-sm font-semibold tracking-wider text-text-green uppercase">{name}</span>
        </div>
      </div>
      <div className="grid grid-cols-12 text-left">
        <div className="flex overflow-hidden col-span-11 mt-2 h-1 text-xs rounded bg-green-100">
          <div
            className={`flex flex-col justify-center text-center text-white whitespace-nowrap shadow-none bg-green-400`}
            style={{ width: percent + '%' }}
          ></div>
        </div>
        <div className="col-span-1 ml-3">
          <span className="text-sm font-semibold text-text-green lg:text-base">{percent ? percent + '%' : ''}</span>
        </div>
      </div>
    </div>
  );
};
