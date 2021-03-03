// 将代码块数据的前缀空格清除
export function clearPreBlock(data: string | undefined) {
  if (!data) return '';
  // 去除头尾空行
  let data_list = data.split('\n');
  if (data_list[0] == '') data_list.shift();
  if (data_list[data_list.length - 1] == '') data_list.pop();
  if (data_list.length == 0) return data;
  // 移除以首行为基准的前缀空格数量
  const preBlockNum = data_list[0].split('').findIndex((val) => val != ' ');
  data_list = data_list.map((val: string) => {
    return val.slice(preBlockNum);
  });
  const target = data_list.reduce(
    (total: string, curValue: string, curIndex: number) => {
      if (curIndex == data_list.length - 1) {
        return total + curValue;
      } else {
        return total + curValue + '\n';
      }
    },
    '',
  );
  return target;
}
