// src/features/shared/components/ShowTime.tsx
import React, { useState } from "react";
import { TimePicker, Button, Badge, DatePicker } from "../../../core/components/ui";
import type { TimeValue } from "../../../core/components/ui";
import { TitledSurface } from "../../../core/components/layout";
import { ThemedText } from "../../../core/components/atomic";

/**
 * ShowTime - Showcase completo per il TimePicker component.
 *
 * Dimostra tutte le features del TimePicker:
 * - Formati 12h/24h con AM/PM
 * - Step intervals configurabili
 * - Working hours constraints
 * - Validation patterns avanzata
 * - Composition con DatePicker
 * - Form integration completa
 */
const ShowTime: React.FC = () => {
  // TimePicker states
  const [selectedTime, setSelectedTime] = useState<TimeValue>();
  const [workingTime, setWorkingTime] = useState<TimeValue>();
  const [meetingTime, setMeetingTime] = useState<TimeValue>();
  const [appointmentTime, setAppointmentTime] = useState<TimeValue>();

  // Composition example states
  const [eventDate, setEventDate] = useState<Date>();
  const [eventTime, setEventTime] = useState<TimeValue>();

  // Form states for meeting scheduler
  const [meetingForm, setMeetingForm] = useState({
    date: undefined as Date | undefined,
    startTime: undefined as TimeValue | undefined,
    endTime: undefined as TimeValue | undefined,
    title: "",
  });

  const [meetingErrors, setMeetingErrors] = useState({
    date: "",
    startTime: "",
    endTime: "",
    title: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Utility functions
  const formatTimeValue = (time: TimeValue | undefined): string => {
    if (!time) return "Non selezionato";
    return `${time.hours.toString().padStart(2, "0")}:${time.minutes.toString().padStart(2, "0")}`;
  };

  const formatTime12h = (time: TimeValue | undefined): string => {
    if (!time) return "Non selezionato";
    const hour = time.hours === 0 ? 12 : time.hours > 12 ? time.hours - 12 : time.hours;
    const period = time.hours >= 12 ? "PM" : "AM";
    return `${hour}:${time.minutes.toString().padStart(2, "0")} ${period}`;
  };

  const timeToMinutes = (time: TimeValue): number => {
    return time.hours * 60 + time.minutes;
  };

  const minutesToTime = (minutes: number): TimeValue => {
    return {
      hours: Math.floor(minutes / 60),
      minutes: minutes % 60,
    };
  };

  // Working hours constraints
  const workingHours = {
    start: { hours: 9, minutes: 0 },
    end: { hours: 17, minutes: 30 },
  };

  // Custom validation for meeting time (no lunch break)
  const validateMeetingTime = (time: TimeValue | undefined): string => {
    if (!time) return "";

    const timeInMinutes = timeToMinutes(time);
    const lunchStart = 12 * 60; // 12:00
    const lunchEnd = 13 * 60; // 13:00

    if (timeInMinutes >= lunchStart && timeInMinutes < lunchEnd) {
      return "Non è possibile programmare riunioni durante la pausa pranzo (12:00-13:00)";
    }

    return "";
  };

  // Form validation for meeting scheduler
  const validateMeetingForm = () => {
    const errors = {
      date: "",
      startTime: "",
      endTime: "",
      title: "",
    };

    if (!meetingForm.title.trim()) {
      errors.title = "Titolo riunione obbligatorio";
    }

    if (!meetingForm.date) {
      errors.date = "Data riunione obbligatoria";
    }

    if (!meetingForm.startTime) {
      errors.startTime = "Orario inizio obbligatorio";
    }

    if (!meetingForm.endTime) {
      errors.endTime = "Orario fine obbligatorio";
    }

    if (meetingForm.startTime && meetingForm.endTime) {
      const startMinutes = timeToMinutes(meetingForm.startTime);
      const endMinutes = timeToMinutes(meetingForm.endTime);

      if (endMinutes <= startMinutes) {
        errors.endTime = "L'orario di fine deve essere successivo a quello di inizio";
      } else if (endMinutes - startMinutes < 30) {
        errors.endTime = "La riunione deve durare almeno 30 minuti";
      } else if (endMinutes - startMinutes > 240) {
        // 4 hours
        errors.endTime = "La riunione non può durare più di 4 ore";
      }
    }

    // Check lunch break overlap
    if (meetingForm.startTime) {
      const lunchError = validateMeetingTime(meetingForm.startTime);
      if (lunchError) errors.startTime = lunchError;
    }

    if (meetingForm.endTime) {
      const lunchError = validateMeetingTime(meetingForm.endTime);
      if (lunchError) errors.endTime = lunchError;
    }

    setMeetingErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  const handleMeetingSubmit = () => {
    if (validateMeetingForm()) {
      setIsFormSubmitted(true);
      setTimeout(() => {
        setIsFormSubmitted(false);
        setMeetingForm({
          date: undefined,
          startTime: undefined,
          endTime: undefined,
          title: "",
        });
        setMeetingErrors({
          date: "",
          startTime: "",
          endTime: "",
          title: "",
        });
      }, 3000);
    }
  };

  // Calculate meeting duration
  const getMeetingDuration = (): string => {
    if (!meetingForm.startTime || !meetingForm.endTime) return "";

    const startMinutes = timeToMinutes(meetingForm.startTime);
    const endMinutes = timeToMinutes(meetingForm.endTime);
    const diffMinutes = endMinutes - startMinutes;

    if (diffMinutes <= 0) return "";

    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    if (hours === 0) return `${minutes} minuti`;
    if (minutes === 0) return `${hours} ${hours === 1 ? "ora" : "ore"}`;
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="space-y-8">
      {/* TimePicker Base */}
      <TitledSurface title="TimePicker Base" variant="primary" padding="lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TimePicker label="Orario 24h" format="24h" step={15} placeholder="HH:MM" helperText="Formato europeo" />

            <TimePicker label="Orario 12h" format="12h" step={15} placeholder="HH:MM AM/PM" helperText="Formato americano" />

            <TimePicker
              label="Orario controllato"
              value={selectedTime}
              onChange={setSelectedTime}
              format="24h"
              required
              helperText="Con stato controllato"
            />
          </div>

          {selectedTime && (
            <div className="p-4 bg-bg-info rounded-lg">
              <ThemedText variant="primary" className="font-medium">
                Orario selezionato: {formatTimeValue(selectedTime)} (24h) • {formatTime12h(selectedTime)} (12h)
              </ThemedText>
            </div>
          )}
        </div>
      </TitledSurface>

      {/* Step Intervals */}
      <TitledSurface title="Step Intervals" variant="secondary" padding="lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <TimePicker label="Step 5 min" step={5} format="24h" size="sm" helperText="Precisione alta" />

            <TimePicker label="Step 10 min" step={10} format="24h" size="sm" helperText="Bilanciato" />

            <TimePicker label="Step 15 min" step={15} format="24h" size="sm" helperText="Standard" />

            <TimePicker label="Step 30 min" step={30} format="24h" size="sm" helperText="Appuntamenti" />
          </div>
        </div>
      </TitledSurface>

      {/* Working Hours & Constraints */}
      <TitledSurface title="Vincoli e Orari Lavorativi" variant="modal" padding="lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TimePicker
              label="Orari lavorativi"
              value={workingTime}
              onChange={setWorkingTime}
              format="24h"
              step={30}
              minTime={workingHours.start}
              maxTime={workingHours.end}
              helperText={`${formatTimeValue(workingHours.start)} - ${formatTimeValue(workingHours.end)}, step 30 min`}
              required
            />

            <TimePicker
              label="Riunioni (no pranzo)"
              value={meetingTime}
              onChange={(time) => {
                setMeetingTime(time);
                // Show validation message in real-time
                if (time) {
                  const error = validateMeetingTime(time);
                  if (error) {
                    console.log("Validation error:", error);
                  }
                }
              }}
              format="24h"
              step={15}
              minTime={{ hours: 8, minutes: 0 }}
              maxTime={{ hours: 18, minutes: 0 }}
              error={meetingTime ? validateMeetingTime(meetingTime) : undefined}
              helperText="Pausa pranzo esclusa (12:00-13:00)"
            />
          </div>
        </div>
      </TitledSurface>

      {/* Size Variants */}
      <TitledSurface title="Dimensioni" variant="info" padding="lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TimePicker label="Small Size" size="sm" format="24h" placeholder="Compatto" />

            <TimePicker label="Medium Size" size="md" format="12h" placeholder="Standard" />

            <TimePicker label="Large Size" size="lg" format="24h" placeholder="Prominent" />
          </div>

          <TimePicker label="Full Width TimePicker" format="24h" fullWidth helperText="Occupa tutta la larghezza disponibile" />
        </div>
      </TitledSurface>

      {/* Composition with DatePicker */}
      <TitledSurface title="Composizione con DatePicker" variant="secondary" padding="lg">
        <div className="space-y-6">
          <ThemedText variant="primary" className="font-medium mb-4" block>
            Pattern consigliato: Componenti separati per massima flessibilità
          </ThemedText>

          {/* Horizontal Layout */}
          <div>
            <ThemedText variant="label" className="font-medium mb-3" block>
              Layout Orizzontale (Desktop)
            </ThemedText>
            <div className="flex gap-4">
              <div className="flex-1">
                <DatePicker label="Data evento" value={eventDate} onChange={setEventDate} minDate={new Date()} />
              </div>
              <div className="flex-1">
                <TimePicker label="Orario evento" value={eventTime} onChange={setEventTime} format="24h" step={30} />
              </div>
            </div>
          </div>

          {/* Vertical Layout */}
          <div>
            <ThemedText variant="label" className="font-medium mb-3" block>
              Layout Verticale (Mobile)
            </ThemedText>
            <div className="space-y-4">
              <DatePicker label="Data consegna" format="DD/MM/YYYY" fullWidth />
              <TimePicker label="Fascia oraria" format="24h" step={60} fullWidth />
            </div>
          </div>

          {/* Combined Display */}
          {eventDate && eventTime && (
            <div className="p-4 bg-bg-info rounded-lg">
              <ThemedText variant="primary" className="font-medium">
                Evento programmato: {eventDate.toLocaleDateString("it-IT")} alle {formatTimeValue(eventTime)}
              </ThemedText>
            </div>
          )}
        </div>
      </TitledSurface>

      {/* Meeting Scheduler Form */}
      <TitledSurface title="Form Avanzato: Pianifica Riunione" variant="info" padding="lg">
        <div className="space-y-6">
          {isFormSubmitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <ThemedText variant="primary" className="text-xl font-semibold mb-2">
                Riunione Pianificata!
              </ThemedText>
              <ThemedText variant="secondary">Tutti i campi sono stati validati correttamente</ThemedText>
            </div>
          ) : (
            <>
              {/* Meeting Title */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Titolo Riunione {meetingErrors.title ? <span className="text-red-500">*</span> : null}
                </label>
                <input
                  type="text"
                  value={meetingForm.title}
                  onChange={(e) => setMeetingForm((prev) => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 border border-border-default rounded-lg bg-bg-primary text-text-primary placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="Es. Weekly Team Meeting"
                />
                {meetingErrors.title && <p className="mt-1 text-xs text-red-500">{meetingErrors.title}</p>}
              </div>

              {/* Date and Times */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <DatePicker
                  label="Data riunione"
                  value={meetingForm.date}
                  onChange={(date) => setMeetingForm((prev) => ({ ...prev, date }))}
                  minDate={new Date()}
                  error={meetingErrors.date}
                  required
                />

                <TimePicker
                  label="Orario inizio"
                  value={meetingForm.startTime}
                  onChange={(time) => setMeetingForm((prev) => ({ ...prev, startTime: time }))}
                  format="24h"
                  step={15}
                  minTime={workingHours.start}
                  maxTime={workingHours.end}
                  error={meetingErrors.startTime}
                  required
                />

                <TimePicker
                  label="Orario fine"
                  value={meetingForm.endTime}
                  onChange={(time) => setMeetingForm((prev) => ({ ...prev, endTime: time }))}
                  format="24h"
                  step={15}
                  minTime={workingHours.start}
                  maxTime={workingHours.end}
                  error={meetingErrors.endTime}
                  required
                />
              </div>

              {/* Meeting Summary */}
              {meetingForm.date && meetingForm.startTime && meetingForm.endTime && (
                <div className="p-4 bg-bg-secondary rounded-lg">
                  <ThemedText variant="primary" className="font-medium mb-2" block>
                    Riepilogo Riunione:
                  </ThemedText>
                  <div className="text-sm space-y-1">
                    <div>
                      <strong>Titolo:</strong> {meetingForm.title || "Da inserire"}
                    </div>
                    <div>
                      <strong>Data:</strong> {meetingForm.date.toLocaleDateString("it-IT")}
                    </div>
                    <div>
                      <strong>Orario:</strong> {formatTimeValue(meetingForm.startTime)} - {formatTimeValue(meetingForm.endTime)}
                    </div>
                    <div>
                      <strong>Durata:</strong> {getMeetingDuration()}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <Button variant="primary" onClick={handleMeetingSubmit} size="lg">
                  Pianifica Riunione
                </Button>
              </div>
            </>
          )}
        </div>
      </TitledSurface>

      {/* States and Debug */}
      <TitledSurface title="Stati e Debug" variant="info" padding="lg">
        <div className="space-y-6">
          {/* Disabled State */}
          <div>
            <ThemedText variant="label" className="font-medium mb-3" block>
              Stati Speciali:
            </ThemedText>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TimePicker
                label="TimePicker disabilitato"
                disabled
                value={{ hours: 14, minutes: 30 }}
                helperText="Campo non modificabile"
              />

              <TimePicker label="Con errore" error="Orario non valido" helperText="Esempio di stato errore" required />
            </div>
          </div>

          {/* Debug Panel */}
          <div>
            <ThemedText variant="label" className="font-medium mb-3" block>
              Debug Panel:
            </ThemedText>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <Badge variant={selectedTime ? "success" : "default"} className="text-center">
                Selected: {selectedTime ? "✓" : "✗"}
              </Badge>
              <Badge variant={workingTime ? "info" : "default"} className="text-center">
                Working: {workingTime ? "✓" : "✗"}
              </Badge>
              <Badge variant={meetingTime ? "warning" : "default"} className="text-center">
                Meeting: {meetingTime ? "✓" : "✗"}
              </Badge>
              <Badge variant={appointmentTime ? "success" : "default"} className="text-center">
                Appointment: {appointmentTime ? "✓" : "✗"}
              </Badge>
            </div>

            {/* Selected Time Details */}
            {selectedTime && (
              <div className="mt-4 p-3 bg-bg-secondary rounded-lg text-sm">
                <div>
                  <strong>Selected Time Details:</strong>
                </div>
                <div>24h format: {formatTimeValue(selectedTime)}</div>
                <div>12h format: {formatTime12h(selectedTime)}</div>
                <div>Minutes from midnight: {timeToMinutes(selectedTime)}</div>
                <div>
                  Is working hours:{" "}
                  {timeToMinutes(selectedTime) >= timeToMinutes(workingHours.start) &&
                  timeToMinutes(selectedTime) <= timeToMinutes(workingHours.end)
                    ? "Yes"
                    : "No"}
                </div>
              </div>
            )}
          </div>
        </div>
      </TitledSurface>
    </div>
  );
};

export default ShowTime;
