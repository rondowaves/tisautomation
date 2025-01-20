'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  cv: FileList;
  coverLetter: FileList;
}

const ApplicationForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Créer un FormData pour envoyer les fichiers
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('position', data.position);
      formData.append('message', data.message);
      if (data.cv[0]) formData.append('cv', data.cv[0]);
      if (data.coverLetter[0]) formData.append('coverLetter', data.coverLetter[0]);

      // Ici, vous devrez implémenter l'envoi à votre backend
      // const response = await fetch('/api/apply', {
      //   method: 'POST',
      //   body: formData,
      // });

      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prénom
          </label>
          <input
            type="text"
            {...register('firstName', { required: 'Ce champ est requis' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom
          </label>
          <input
            type="text"
            {...register('lastName', { required: 'Ce champ est requis' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            {...register('email', { 
              required: 'Ce champ est requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Adresse email invalide'
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Poste recherché
        </label>
        <input
          type="text"
          {...register('position', { required: 'Ce champ est requis' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
        />
        {errors.position && (
          <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message / Lettre de motivation
        </label>
        <textarea
          {...register('message', { required: 'Ce champ est requis' })}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CV (PDF, DOC, DOCX)
          </label>
          <input
            type="file"
            {...register('cv', { 
              required: 'CV requis',
              validate: {
                fileType: (value) => {
                  if (!value[0]) return true;
                  const types = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                  return types.includes(value[0].type) || 'Format de fichier non supporté';
                }
              }
            })}
            accept=".pdf,.doc,.docx"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
          />
          {errors.cv && (
            <p className="mt-1 text-sm text-red-600">{errors.cv.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Autres documents
          </label>
          <input
            type="file"
            {...register('coverLetter')}
            accept=".pdf,.doc,.docx"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-secondary text-white px-6 py-3 rounded-full font-medium
            hover:bg-[#FF8C00] transition-colors duration-300
            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature'}
        </button>
      </div>

      {submitSuccess && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
          Votre candidature a été envoyée avec succès ! Nous vous contacterons prochainement.
        </div>
      )}
    </form>
  );
};

export default ApplicationForm;
