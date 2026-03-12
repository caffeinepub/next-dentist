actor {
  type ClinicInfo = {
    name : Text;
    phone : Text;
    address : Text;
    website : Text;
  };

  let clinicInfo : ClinicInfo = {
    name = "DentalCare Clinic";
    phone = "123-456-7890";
    address = "123 Main St, Anytown, USA";
    website = "https://dentalcare.com";
  };

  public query ({ caller }) func getClinicInfo() : async ClinicInfo {
    clinicInfo;
  };
};
