/* selection sort in javascript */

function swap (a,b)
{
  var tmp;
  tmp = a;
  a = b;
  b = tmp;
}

function selectionSort (anArray)
{
  var i, j, tmp;
  for (i=0; i < anArray.length-1; i++)
  {
    tmp = i;
    for (j=i+1; j < anArray.length; j++)
    {
      if (anArray[j] < anArray[tmp]) {
        tmp = j;
      }
    }
    var a, b = swap(anArray[i], anArray[j])
    }
  }
}
