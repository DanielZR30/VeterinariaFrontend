﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class VeterinaryEntities : DbContext
    {
        public VeterinaryEntities()
            : base("name=VeterinaryEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AestheticService> AestheticServices { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<Estatu> Estatus { get; set; }
        public virtual DbSet<Hospitalization> Hospitalizations { get; set; }
        public virtual DbSet<Invoice> Invoices { get; set; }
        public virtual DbSet<MedicalExamination> MedicalExaminations { get; set; }
        public virtual DbSet<MedicalService> MedicalServices { get; set; }
        public virtual DbSet<Pet> Pets { get; set; }
        public virtual DbSet<PetRecord> PetRecords { get; set; }
        public virtual DbSet<PetVaccine> PetVaccines { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Species> Species { get; set; }
        public virtual DbSet<SurgeryService> SurgeryServices { get; set; }
        public virtual DbSet<Vaccine> Vaccines { get; set; }
    }
}
