package com.luis.springbootexample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
public class SpringBootExampleApplication {

	public static void main(String[] args) {

		SpringApplication.run(SpringBootExampleApplication.class, args);
	}

	@GetMapping("/greet")
	public GreetResponse greet(){
		 GreetResponse response = new GreetResponse(
				"Hello",
				List.of("Java","Python","JavaScript"),
				new Person("Luis Paulo", 33, 3500)
		);
		 return response;
	}

	record Person(String name, int age, double savings){}

	record GreetResponse(
			String greet,
			List<String> favProgrammingLanguages,
			Person person
	){}

}
