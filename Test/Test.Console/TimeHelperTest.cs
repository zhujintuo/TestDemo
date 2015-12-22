using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test.Console
{
    public class TimeHelperTest
    {
        static void Main(string[] args)
        {
            DateTime startDate = Convert.ToDateTime("2015-03-01");
            DateTime endDate = Convert.ToDateTime("2015-12-23");

            Dictionary<string, string> dic = Test.Common.TimeHelper.GetMonths(startDate, endDate);

            foreach (KeyValuePair<string, string> kv in dic) 
            {
                System.Console.WriteLine(kv.Key +"："+ kv.Value); 
            }
             
            System.Console.Read();
        }
    }
}
