https://www.programiz.com/java-programming/linkedhashset

array is object, but string is class of object.
== compare object refrence
equals() checks value

arr.length   //array
str.length() //string

1.  static String set3rdPLace(String s) {
        StringBuilder modifiedString = new StringBuilder(s);
        modifiedString.setCharAt(3,'*'); //set * at index 3, s[3]='*' not work.
        return modifiedString.toString();
    }

2.number to string
 public static String numberToString(int num) {
       String str=String.valueOf(num);
      return str;
    }

3. string to integer
String strNumber;
return Integer.parseInt(strNumber);

4. Capitalize the character if the array index is in range else ignore
  learn by doing
  0 6 9 100
 static String indexCapitalisation(String s, int[] ind) {
        StringBuilder ans = new StringBuilder(s);
        for(int i=0;i<ind.length;i++){
             if (ind[i] < s.length()) {
                char originalChar = ans.charAt(ind[i]);
                char capitalizedChar = Character.toUpperCase(originalChar);
                ans.setCharAt(ind[i], capitalizedChar);

             }
        }
        return ans.toString();
    }

4. Reverse string  //hint: Use the StringBuilder.reverse() method.
  static String reverseWords(String str) {
        StringBuilder strB=new StringBuilder(str);
        strB=strB.reverse();
        return strB.toString();
    }

5. remove and add to array list.
 public static ArrayList<String> changePassword(ArrayList<String> list) {
      list.add(list.remove(0));
      return list;
    }

6. set at nth index in list.
 public static List<Integer> updateMarks(List<Integer> list, int rollNo, int marks) {
        list.set(rollNo, marks);
        return list;
    }

7. If a person said "England", then the person after him can only name places starting with the letter 'd'
["michigan", "nevada", "albuquerque", "zurich", "hyderabad"]

Sample Output 2
["michigan", "nevada", "albuquerque"]

    public static List<String> atlas(List<String> words) {
        List<String> output = new ArrayList<>();
        if(!words.isEmpty() && !words.get(0).isEmpty()){
            output.add(words.get(0));

            for(int i=1;i<words.size();i++){
                String currWord=words.get(i);
                if(currWord.isEmpty()) break;
                
                String lastWord=output.get(i - 1);
                if (currWord.startsWith(lastWord.substring(lastWord.length() - 1))) {
                    output.add(currWord);
                }else break;
            }
        }
        return output;
    }

8. maximum Frequency of any element
  static int modeFrequency(int[] arr) {
        Map<Integer, Integer> ageMap = new HashMap<>();
        for(int i=0;i<arr.length;i++){
           ageMap.put(arr[i], ageMap.getOrDefault(arr[i], 0)+1);
        }

        int mxFreq=0;
        for(int freq : ageMap.values()){
            if(freq>mxFreq)
            mxFreq=freq;
        }
        return mxFreq;
    }


9. return distinct element
 static int[] distinctNumbers(int[] arr) {
      LinkedHashSet<Integer> set = new LinkedHashSet<>();
    for (int element : arr) {  
        set.add(element);
    }
    int[] resultArray = set.stream().mapToInt(Integer::intValue).toArray();
    return resultArray;
  }


 HashMap<String, String> set = new HashMap<>();
        set.put("Australia", "English");
        return set.get("Australia");  //output-> English

10. check if all char occurence is same
static Boolean balancedToken(String name) {
    if(name.isEmpty())return true;
   name = name.toLowerCase();

        Map<Character, Integer> mp = new HashMap<>();
        for (int i = 0; i < name.length(); i++) {
            char curChar = name.charAt(i);
            mp.put(curChar, mp.getOrDefault(curChar, 0) + 1);
        }
        Map<Integer, Boolean> frequencySet = new HashMap<>();
        for (int frequency : mp.values()) {
            frequencySet.put(frequency, true);
        }
        return frequencySet.size() == 1;
    }

11. form a string contain all unique character 
public static String combineStrings(String s1, String s2) {
       HashSet<Character> uniqueChars = new HashSet<>();

        for (char ch : s1.toCharArray()) {
            uniqueChars.add(ch);
        }
        for (char ch : s2.toCharArray()) {
            uniqueChars.add(ch);
        }
        Set<Character> sortedChars = new TreeSet<>(uniqueChars);
        StringBuilder result = new StringBuilder();
        for (char ch : sortedChars) {
            result.append(ch);
        }

        return result.toString();
    }
12. Frequency of char
 public static boolean isogram(String s) {
      Map<Character, Integer>mp=new HashMap<>();
      for(int i=0;i<s.length();i++){
         if (mp.containsKey(s.charAt(i))) {
                return false;
            }
          mp.put(s.charAt(i), 1);    //increase count mp.put(s.charAt(i), mp.get(s.charAt(i))+1);
         
      }
      return true;
    }

13. CHeck of both string have the same characters
    static boolean isValidAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        Map<Character, Integer>mp=new HashMap<>();
        for(int i=0;i<s.length();i++){
            mp.put(s.charAt(i), mp.getOrDefault(s.charAt(i), 0)+1 );
        }
        for(int i=0;i<t.length();i++){
            if(!mp.containsKey(t.charAt(i)) || mp.get(t.charAt(i))==0)return false;
            mp.put(t.charAt(i), mp.get(t.charAt(i))-1);
        }
        for (int count : mp.values()) {
            if (count != 0) {
                return false;  
            }
        }
        return true;
    }


------------NOTE-------------
Map<String, String>mp;
 public Solution() { // constructor
        mp=new Map<>(); //this will be an error
    }

 error: Map is abstract; cannot be instantiated
mp=new Map<>()


map is an interface in Java and cannot be instantiated directly. You need to choose a concrete implementation of the Map interface, such as HashMap, LinkedHashMap
HashMap<String, String>mp;
public Solution() { // constructor
    mp=new HashMap<>();
}
 mp.put(key, value);

if(mp.containsKey(key))
   return mp.get(key);


String name="kalyan"
char curChar = name[i]; //char required but string found
char curChar=name.charAt(i)

Note->Integer not int because generic type accept bcause generic type can not accept primitive types.
List<Integer>ans=new ArrayList<>();
size->  ans.size()
add->   ans.add()
getelement-> ans.get(i);


JVM is platform dependent which exeuted java bytecode.


