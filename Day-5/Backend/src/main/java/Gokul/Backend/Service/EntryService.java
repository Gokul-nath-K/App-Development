package Gokul.Backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import Gokul.Backend.DTO.AuthenticationRequest;
import Gokul.Backend.DTO.AuthenticationResponse;
import Gokul.Backend.DTO.RegisterRequest;
import Gokul.Backend.Entity.User;
import Gokul.Backend.Entity.Enumerate.Role;
import Gokul.Backend.Repository.UserRepository;
import Gokul.Backend.Util.JwtService;


@Service
public class EntryService {

	@Autowired
	UserRepository uRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	public AuthenticationResponse validateUser(AuthenticationRequest request) {

		try {

			authenticationManager.authenticate(

				new UsernamePasswordAuthenticationToken(
						request.getEmail(), request.getPassword()
					)
			);

			var user = uRepo.findByEmail(request.getEmail()).orElseThrow();

			var jwtToken = jwtService.generateToken(user);

			return AuthenticationResponse.builder()
					.token(jwtToken)
					.build();
		}
		catch(Exception e) {

			return AuthenticationResponse.builder()
					.token(null)
					.build();
		}
	}
	
	
	public AuthenticationResponse CreateNewUser(RegisterRequest request) {
		
		
		var user = User.builder()
				.name(request.getName())
				.phoneno(request.getPhoneno())
				.dob(request.getDob())
				.email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.role(Role.valueOf(request.getRole().toUpperCase()))
				.build();
				
		
		List<Integer> emailCountList = uRepo.isEmailExist(user.getEmail());
		List<Integer> phnoCountList = uRepo.isPhnoExist(user.getPhoneno());
		
		if(emailCountList.get(0) !=  0) {
			return null;
		}
		else if(phnoCountList.get(0) != 0) {
			return null;
		}
		else {
			
			uRepo.save(user);
			
			var jwtToken = jwtService.generateToken(user);
			
			return AuthenticationResponse.builder()
					.token(jwtToken)
					.build();
		}
	}
}
