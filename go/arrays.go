package main

import "fmt"

func main() {
	nums := [8]int{2, 1, 6, 3, 5, 8, 4, 7}

	n := len(nums)

	for i := n - 1; i >= 0; i-- {
		fmt.Println("index: ", i)
		fmt.Println("value: ", nums[i])
	}
	slicer()
}

func slicer() {
	// Creating a slice with initial elements
	numbers := []int{1, 2, 3}

	// Appending elements to the slice
	numbers = append(numbers, 4, 5, 6, 7, 899999, 10, 11, 12)
	fmt.Println(numbers) // Output: [1 2 3 4 5]

	// Slicing a slice to create a new slice
	newSlice := numbers[1:4]
	fmt.Println(newSlice) // Output: [2 3 4]

	// Modifying the slice
	newSlice[0] = 10
	fmt.Println(numbers) // Output: [1 10 3 4 5] (Note: original slice is also modified)
}
