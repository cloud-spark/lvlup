package main

import "fmt"

func main() {
	nums := [8]int{2, 1, 6, 3, 5, 8, 4, 7}

	n := len(nums)

	for i := n - 1; i >= 0; i-- {
		fmt.Println("index: ", i)
		fmt.Println("value: ", nums[i])
	}
}
