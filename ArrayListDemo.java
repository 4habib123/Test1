package my.com;

import java.util.*;
public class ArrayListDemo {

	public static void main(String[] args) {
		ArrayList<String> arrlist=new ArrayList<String>();
		arrlist.add("ABC");
		arrlist.add("XYZ");
		arrlist.add("LMN");
		System.out.println("List content = "+arrlist);
		System.out.println("List Size " + arrlist.size());
		arrlist.remove(1);
		System.out.println("List content = "+arrlist);
	
	
	}

}
