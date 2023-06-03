package com.luis.springbootexample.customer;

import java.util.List;
import java.util.Optional;

public interface CustomerDao {
    List<Customer> selectAllCustomers();
    Optional<Customer> selectCustomerById(Integer id);
    void insertCustomer(Customer customer);
    boolean ExistisPersonWithEmail(String email);
    boolean ExistisPersonWithId(Integer id);
    void deleteCustomerById(Integer id);

}
