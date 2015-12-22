using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test.Common
{
    public class TimeHelper
    {
        /// <summary>
        /// 通过传入开始日期、结束日期获取月份信息
        /// </summary>
        /// <remarks>
        /// author:zhujt
        /// create date:2015-12-22 22:22:27
        /// </remarks>
        /// <param name="startDate"></param>
        /// <param name="endDate"></param>
        /// <returns>以List集合返回</returns>
        public static Dictionary<string, string> GetMonths(DateTime startDate, DateTime endDate)
        {
            Dictionary<string, string> dic = new Dictionary<string, string>();
            while (startDate <= endDate)
            {
                dic.Add(startDate.ToString("yyyy-MM") + "-01",
                       Convert.ToDateTime(startDate.AddMonths(1).ToString("yyyy-MM")).AddDays(-1).ToString("yyyy-MM-dd"));
                startDate = startDate.AddMonths(1);
            }
            return dic;
        }
    }
}
