// src/features/shared/components/ShowDatePicker.tsx
import React, { useState } from "react";
import { DatePicker, Button, Badge } from "../../../core/components/ui";
import { TitledSurface } from "../../../core/components/layout";
import { ThemedText } from "../../../core/components/atomic";

/**
 * ShowDatePicker - Showcase completo per il DatePicker component.
 *
 * Dimostra tutte le features del DatePicker:
 * - Dimensioni e formati diversi
 * - Stati controlled e uncontrolled
 * - Validazione e date constraints
 * - Date disabilitate e weekend
 * - Form integration con validation
 * - Debug panel per state monitoring
 */
const ShowDatePicker: React.FC = () => {
  // State for controlled examples
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [appointmentDate, setAppointmentDate] = useState<Date>();
  const [deliveryDate, setDeliveryDate] = useState<Date>();

  // Form state
  const [formData, setFormData] = useState({
    birthDate: undefined as Date | undefined,
    eventDate: undefined as Date | undefined,
    workDate: undefined as Date | undefined,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Generate utility dates
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  const nextMonth = new Date();
  nextMonth.setMonth(today.getMonth() + 1);

  // Generate weekends for current month
  const generateWeekends = () => {
    const weekends = [];
    const year = today.getFullYear();
    const month = today.getMonth();

    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, month, day);
      if (date.getMonth() !== month) break;
      if (date.getDay() === 0 || date.getDay() === 6) {
        weekends.push(date);
      }
    }
    return weekends;
  };

  // Holiday dates
  const holidays = [
    new Date(2024, 11, 25), // Natale
    new Date(2024, 11, 26), // Santo Stefano
    new Date(2025, 0, 1), // Capodanno
    new Date(2025, 0, 6), // Epifania
  ];

  const weekends = generateWeekends();

  // Form validation
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.birthDate) {
      errors.birthDate = "Data di nascita obbligatoria";
    } else if (formData.birthDate > today) {
      errors.birthDate = "La data di nascita deve essere nel passato";
    }

    if (!formData.eventDate) {
      errors.eventDate = "Data evento obbligatoria";
    } else if (formData.eventDate < today) {
      errors.eventDate = "La data dell'evento deve essere futura";
    }

    if (!formData.workDate) {
      errors.workDate = "Data lavorativa obbligatoria";
    } else {
      const isWeekend = formData.workDate.getDay() === 0 || formData.workDate.getDay() === 6;
      const isHoliday = holidays.some((holiday) => holiday.toDateString() === formData.workDate!.toDateString());

      if (isWeekend) {
        errors.workDate = "Non è possibile selezionare weekend";
      } else if (isHoliday) {
        errors.workDate = "Non è possibile selezionare giorni festivi";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      setIsFormSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsFormSubmitted(false);
        setFormData({
          birthDate: undefined,
          eventDate: undefined,
          workDate: undefined,
        });
        setFormErrors({});
      }, 3000);
    }
  };

  // Format date for display
  const formatDateDisplay = (date: Date | undefined) => {
    if (!date) return "Non selezionata";
    return date.toLocaleDateString("it-IT", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-8">
      {/* Basic DatePickers */}
      <TitledSurface title="DatePicker Base" variant="primary" padding="lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DatePicker label="Data semplice" placeholder="Seleziona una data" helperText="Formato italiano standard" />

            <DatePicker
              label="Data controllata"
              value={selectedDate}
              onChange={setSelectedDate}
              required
              helperText="Con stato controllato"
            />

            <DatePicker label="Data con errore" error="Campo obbligatorio" required />
          </div>

          {selectedDate && (
            <div className="p-4 bg-bg-info rounded-lg">
              <ThemedText variant="primary" className="font-medium">
                Data selezionata: {formatDateDisplay(selectedDate)}
              </ThemedText>
            </div>
          )}
        </div>
      </TitledSurface>

      {/* Size Variants */}
      <TitledSurface title="Dimensioni e Formati" variant="secondary" padding="lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DatePicker label="Small (IT)" format="DD/MM/YYYY" size="sm" placeholder="gg/mm/aaaa" />

            <DatePicker label="Medium (US)" format="MM/DD/YYYY" size="md" placeholder="mm/dd/yyyy" />

            <DatePicker label="Large (ISO)" format="YYYY-MM-DD" size="lg" placeholder="yyyy-mm-dd" />
          </div>

          <DatePicker label="Full Width DatePicker" fullWidth helperText="Occupa tutta la larghezza disponibile" />
        </div>
      </TitledSurface>

      {/* Date Constraints */}
      <TitledSurface title="Validazione e Vincoli" variant="modal" padding="lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DatePicker
              label="Solo date future"
              value={appointmentDate}
              onChange={setAppointmentDate}
              minDate={tomorrow}
              helperText={`Minimo: ${tomorrow.toLocaleDateString("it-IT")}`}
              required
            />

            <DatePicker
              label="Prossime 4 settimane"
              value={deliveryDate}
              onChange={setDeliveryDate}
              minDate={tomorrow}
              maxDate={nextMonth}
              helperText={`Entro: ${nextMonth.toLocaleDateString("it-IT")}`}
            />
          </div>

          <DatePicker
            label="Giorni lavorativi"
            disabledDates={[...weekends, ...holidays]}
            helperText="Weekend e festivi non selezionabili"
            fullWidth
          />
        </div>
      </TitledSurface>

      {/* Form Integration */}
      <TitledSurface title="Integrazione Form" variant="info" padding="lg">
        <div className="space-y-6">
          {isFormSubmitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <ThemedText variant="primary" className="text-xl font-semibold mb-2">
                Form Inviato con Successo!
              </ThemedText>
              <ThemedText variant="secondary">Tutti i campi sono stati validati correttamente</ThemedText>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DatePicker
                  label="Data di nascita"
                  value={formData.birthDate}
                  onChange={(date) => setFormData((prev) => ({ ...prev, birthDate: date }))}
                  maxDate={today}
                  error={formErrors.birthDate}
                  required
                  helperText="Deve essere nel passato"
                />

                <DatePicker
                  label="Data evento"
                  value={formData.eventDate}
                  onChange={(date) => setFormData((prev) => ({ ...prev, eventDate: date }))}
                  minDate={today}
                  error={formErrors.eventDate}
                  required
                  helperText="Deve essere futura"
                />
              </div>

              <DatePicker
                label="Data lavorativa"
                value={formData.workDate}
                onChange={(date) => setFormData((prev) => ({ ...prev, workDate: date }))}
                disabledDates={[...weekends, ...holidays]}
                error={formErrors.workDate}
                required
                helperText="Solo giorni lavorativi"
                fullWidth
              />

              <div className="flex justify-center">
                <Button variant="primary" onClick={handleFormSubmit} size="lg">
                  Valida Form
                </Button>
              </div>
            </>
          )}
        </div>
      </TitledSurface>

      {/* States and Disabled */}
      <TitledSurface title="Stati Speciali" variant="secondary" padding="lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DatePicker label="DatePicker disabilitato" disabled value={today} helperText="Campo non modificabile" />

            <DatePicker
              label="Con placeholder"
              placeholder="Clicca per aprire calendario"
              helperText="Placeholder personalizzato"
            />
          </div>
        </div>
      </TitledSurface>

      {/* Debug Panel */}
      <TitledSurface title="Debug Panel" variant="info" padding="lg">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ThemedText variant="label" className="font-medium mb-2" block>
                Selected Date:
              </ThemedText>
              <Badge variant={selectedDate ? "success" : "default"}>
                {selectedDate ? selectedDate.toISOString().split("T")[0] : "None"}
              </Badge>
            </div>

            <div>
              <ThemedText variant="label" className="font-medium mb-2" block>
                Appointment Date:
              </ThemedText>
              <Badge variant={appointmentDate ? "info" : "default"}>
                {appointmentDate ? appointmentDate.toISOString().split("T")[0] : "None"}
              </Badge>
            </div>
          </div>

          <div>
            <ThemedText variant="label" className="font-medium mb-2" block>
              Form State:
            </ThemedText>
            <div className="flex flex-wrap gap-2">
              <Badge variant={formData.birthDate ? "success" : "warning"}>Birth: {formData.birthDate ? "✓" : "✗"}</Badge>
              <Badge variant={formData.eventDate ? "success" : "warning"}>Event: {formData.eventDate ? "✓" : "✗"}</Badge>
              <Badge variant={formData.workDate ? "success" : "warning"}>Work: {formData.workDate ? "✓" : "✗"}</Badge>
              <Badge variant={Object.keys(formErrors).length === 0 ? "success" : "danger"}>
                Errors: {Object.keys(formErrors).length}
              </Badge>
            </div>
          </div>

          <div>
            <ThemedText variant="label" className="font-medium mb-2" block>
              Date Utilities:
            </ThemedText>
            <div className="text-sm text-text-secondary space-y-1">
              <div>Today: {today.toLocaleDateString("it-IT")}</div>
              <div>Tomorrow: {tomorrow.toLocaleDateString("it-IT")}</div>
              <div>Next Month: {nextMonth.toLocaleDateString("it-IT")}</div>
              <div>Weekends this month: {weekends.length}</div>
              <div>Holidays: {holidays.length}</div>
            </div>
          </div>
        </div>
      </TitledSurface>
    </div>
  );
};

export default ShowDatePicker;
