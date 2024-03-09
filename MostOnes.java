//code answering promt for issue #8 - Cont. by Adrian T

import java.util.Arrays;
public class MostOnes{

    //main
    public static void main(String[] args){
        System.out.println("----------This code takes in a 2D array and displays the Row index with the most 1s and the number of 1s in it----------");
        int[][] checkArray = {{1,0,0,1},{0,0,0,1},{1,1,1,1}};
        System.out.println("Contents of array to be checked (hard coded)");
        System.out.println(Arrays.deepToString(checkArray));
        System.out.println("");
        System.out.println("Printing answer...");
        System.out.println(Arrays.toString(findMostOnes(checkArray)));
        System.out.println("----------End Program----------");
    }//end main

    //module that takes array of ints and figures which row has the most 1s in it
    public static int[] findMostOnes(int[][] arr){
        //variables to store return values and counter to track number of ones
        int returnRow = 0;
        int returnNumOnes = 0;
        int countOnes = 0;

        //outer for to traverse rows of array
        for(int i = 0; i < arr.length; i++){
            //inner for to traverse columns of array, check each value and increment number of ones per row
            for(int j = 0; j < arr[i].length; j++){
                if(arr[i][j] == 1){
                    countOnes++;
                }
            }//end inner for

            //store return values when appropriate
            if(countOnes > returnNumOnes){
                returnRow = i;
                returnNumOnes = countOnes;
            }
            countOnes = 0;
        }//end outer for

        //return int array with Row and number of ones
        int[] answer = {returnRow, returnNumOnes};
        return answer;
    }//end findMostOnes
}//end MostOnes