package com.luis.springbootexample;

import com.luis.springbootexample.customer.Customer;
import com.luis.springbootexample.customer.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class SpringBootExampleApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringBootExampleApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(CustomerRepository customerRepository){
		return args -> {
			Customer luis = new Customer("Luis","luis@gmail.com",33);
			Customer jamila = new Customer("Jamila","jamila@gmail.com",18);
			List<Customer> customers = List.of(luis, jamila);
			customerRepository.saveAll(customers);
		};

	}
}
