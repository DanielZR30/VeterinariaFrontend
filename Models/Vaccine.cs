//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Veterinaria.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Vaccine
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Vaccine()
        {
            this.PetVaccines = new HashSet<PetVaccine>();
        }
    
        public string IDVaccine { get; set; }
        public string VaccineName { get; set; }
        public string VaccineDescription { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PetVaccine> PetVaccines { get; set; }
    }
}
