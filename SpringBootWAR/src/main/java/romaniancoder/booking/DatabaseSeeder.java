package romaniancoder.booking;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeeder implements CommandLineRunner {
    private BookingRepository bookingRepository;

    public DatabaseSeeder(BookingRepository bookingRepository){
        this.bookingRepository = bookingRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        List<HotelBooking> bookings = new ArrayList<>();

        bookings.add(new HotelBooking("Transylvania", 200.50, 3));
        bookings.add(new HotelBooking("Bean", 90, 4));
        bookings.add(new HotelBooking("Boutique", 140.74, 1));

        bookingRepository.save(bookings);
    }
}
