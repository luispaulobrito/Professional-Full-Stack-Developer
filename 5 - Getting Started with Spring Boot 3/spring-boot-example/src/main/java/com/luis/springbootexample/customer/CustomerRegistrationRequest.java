package com.luis.springbootexample.customer;

public record CustomerRegistrationRequest(
        String name,
        String email,
        Integer age
) {
}
